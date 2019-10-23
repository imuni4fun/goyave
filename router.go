package goyave

import (
	"net/http"

	"github.com/System-Glitch/goyave/middleware"

	"github.com/System-Glitch/goyave/config"
	"github.com/System-Glitch/goyave/helpers/response"
	"github.com/gorilla/mux"
)

// Router registers routes to be matched and dispatches a handler.
type Router struct {
	muxRouter *mux.Router
}

func newRouter() *Router {
	muxRouter := mux.NewRouter()
	muxRouter.Schemes(config.GetString("protocol"))
	router := &Router{muxRouter: muxRouter}
	router.Middleware(middleware.Recovery)
	return router
}

// Subrouter create a new sub-router from this router.
// Use subrouters to create route groups and to apply middlewares to multiple routes.
func (r *Router) Subrouter(prefix string) *Router {
	return &Router{muxRouter: r.muxRouter.PathPrefix(prefix).Subrouter()}
}

// Middleware apply one or more middleware(s) to the route group.
func (r *Router) Middleware(middlewares ...func(http.Handler) http.Handler) {
	for _, middleware := range middlewares {
		r.muxRouter.Use(middleware)
	}
}

// Route register a new route.
func (r *Router) Route(method string, endpoint string, handler func(http.ResponseWriter, *Request), requestGenerator func() *Request) {
	r.muxRouter.HandleFunc(endpoint, func(w http.ResponseWriter, r *http.Request) {
		req, ok := requestHandler(w, r, requestGenerator)
		if ok {
			handler(w, req)
		}
	}).Methods(method)
}

// Static serve a directory of static resources
func (r *Router) Static(endpoint string, directory string) {
	// TODO implement Static
}

func requestHandler(w http.ResponseWriter, r *http.Request, requestGenerator func() *Request) (*Request, bool) {
	var request *Request
	if requestGenerator != nil {
		request = requestGenerator()
	} else {
		request = &Request{}
	}
	request.httpRequest = r
	request.Params = mux.Vars(r)
	errsBag := request.validate()
	if errsBag == nil {
		return request, true
	}

	var code int
	if isRequestMalformed(errsBag) {
		code = http.StatusBadRequest
	} else {
		code = http.StatusUnprocessableEntity
	}
	response.JSON(w, code, errsBag)

	return nil, false
}
