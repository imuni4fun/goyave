(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{368:function(e,t,a){"use strict";a.r(t);var r=a(18),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#v2-10-x"}},[e._v("v2.10.x")]),a("ul",[a("li",[a("a",{attrs:{href:"#v2-10-1"}},[e._v("v2.10.1")])]),a("li",[a("a",{attrs:{href:"#v2-10-0"}},[e._v("v2.10.0")])])])]),a("li",[a("a",{attrs:{href:"#v2-9-0"}},[e._v("v2.9.0")])]),a("li",[a("a",{attrs:{href:"#v2-8-0"}},[e._v("v2.8.0")])]),a("li",[a("a",{attrs:{href:"#v2-7-x"}},[e._v("v2.7.x")]),a("ul",[a("li",[a("a",{attrs:{href:"#v2-7-1"}},[e._v("v2.7.1")])]),a("li",[a("a",{attrs:{href:"#v2-7-0"}},[e._v("v2.7.0")])])])]),a("li",[a("a",{attrs:{href:"#v2-6-0"}},[e._v("v2.6.0")])]),a("li",[a("a",{attrs:{href:"#v2-5-0"}},[e._v("v2.5.0")])]),a("li",[a("a",{attrs:{href:"#v2-4-x"}},[e._v("v2.4.x")]),a("ul",[a("li",[a("a",{attrs:{href:"#v2-4-3"}},[e._v("v2.4.3")])]),a("li",[a("a",{attrs:{href:"#v2-4-2"}},[e._v("v2.4.2")])]),a("li",[a("a",{attrs:{href:"#v2-4-1"}},[e._v("v2.4.1")])]),a("li",[a("a",{attrs:{href:"#v2-4-0"}},[e._v("v2.4.0")])])])]),a("li",[a("a",{attrs:{href:"#v2-3-0"}},[e._v("v2.3.0")])]),a("li",[a("a",{attrs:{href:"#v2-2-x"}},[e._v("v2.2.x")]),a("ul",[a("li",[a("a",{attrs:{href:"#v2-2-1"}},[e._v("v2.2.1")])]),a("li",[a("a",{attrs:{href:"#v2-2-0"}},[e._v("v2.2.0")])])])]),a("li",[a("a",{attrs:{href:"#v2-1-0"}},[e._v("v2.1.0")])]),a("li",[a("a",{attrs:{href:"#v2-0-0"}},[e._v("v2.0.0")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"v2-10-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-10-x"}},[e._v("#")]),e._v(" v2.10.x")]),e._v(" "),a("h3",{attrs:{id:"v2-10-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-10-1"}},[e._v("#")]),e._v(" v2.10.1")]),e._v(" "),a("ul",[a("li",[e._v("Changed the behavior of "),a("code",[e._v("response.File()")]),e._v(" and "),a("code",[e._v("response.Download()")]),e._v(" to respond with a status 404 if the given file doesn't exist instead of panicking.")]),e._v(" "),a("li",[e._v("Improved error handling:\n"),a("ul",[a("li",[a("code",[e._v("log.Panicf")]),e._v(" is not used anymore to print panics, removing possible duplicate logs.")]),e._v(" "),a("li",[e._v("Added error checks during automatic migrations.")]),e._v(" "),a("li",[a("code",[e._v("goyave.Start()")]),e._v(" now exits the program with the following error codes:\n"),a("ul",[a("li",[a("code",[e._v("2")]),e._v(": Panic (server already running, error when loading language files, etc)")]),e._v(" "),a("li",[a("code",[e._v("3")]),e._v(": Configuration is invalid")]),e._v(" "),a("li",[a("code",[e._v("4")]),e._v(": An error occurred when opening network listener")]),e._v(" "),a("li",[a("code",[e._v("5")]),e._v(": An error occurred in the HTTP server")])])])])])]),e._v(" "),a("p",[e._v("This change will require a slightly longer "),a("code",[e._v("main")]),e._v(" function but offers better flexibility for error handling and multi-services.")]),e._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":=")]),e._v(" goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("nil")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ExitCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Fixed a bug in "),a("code",[e._v("TestSuite")]),e._v(": HTTP client was re-created everytime "),a("code",[e._v("getHTTPClient()")]),e._v(" was called.")]),e._v(" "),a("li",[e._v("Fixed testing documentation examples that didn't close http response body.")]),e._v(" "),a("li",[e._v("Documentation meta improvements.")]),e._v(" "),a("li",[e._v("Protect JSON requests with "),a("code",[e._v("maxUploadSize")]),e._v(".")]),e._v(" "),a("li",[e._v("The server will now automatically return "),a("code",[e._v("413 Payload Too Large")]),e._v(" if the request's size exceeds the "),a("code",[e._v("maxUploadSize")]),e._v(" defined in configuration.")]),e._v(" "),a("li",[e._v("The request parsing middleware doesn't drain the body anymore, improving native handler compatibility.")]),e._v(" "),a("li",[e._v("Set a default status handler for all 400 errors.")]),e._v(" "),a("li",[e._v("Fixed a bug preventing query parameters to be parsed when the request had the "),a("code",[e._v("Content-Type: application/json")]),e._v(" header.")]),e._v(" "),a("li",[e._v("Added a dark theme for the documentation. It can be toggled by clicking the moon icon next to the search bar.")])]),e._v(" "),a("h3",{attrs:{id:"v2-10-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-10-0"}},[e._v("#")]),e._v(" v2.10.0")]),e._v(" "),a("ul",[a("li",[e._v("Added router "),a("code",[e._v("Get")]),e._v(", "),a("code",[e._v("Post")]),e._v(", "),a("code",[e._v("Put")]),e._v(", "),a("code",[e._v("Patch")]),e._v(", "),a("code",[e._v("Delete")]),e._v(" and "),a("code",[e._v("Options")]),e._v(" methods to register routes directly without having to specify a method string.")]),e._v(" "),a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/advanced/localization.html#placeholders"}},[e._v("placeholder")]),e._v(" support in regular language lines.")],1)]),e._v(" "),a("h2",{attrs:{id:"v2-9-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-9-0"}},[e._v("#")]),e._v(" v2.9.0")]),e._v(" "),a("ul",[a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/basics/database.html#hidden-fields"}},[e._v("hidden fields")]),e._v(".")],1),e._v(" "),a("li",[e._v("Entirely removed Gorilla mux. This change is not breaking: native middleware still work the same.")])]),e._v(" "),a("h2",{attrs:{id:"v2-8-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-8-0"}},[e._v("#")]),e._v(" v2.8.0")]),e._v(" "),a("ul",[a("li",[e._v("Added a built-in logging system.\n"),a("ul",[a("li",[e._v("Added a middleware for access logs using the Common Log Format or Combined Log Format. This allows custom formatters too.")]),e._v(" "),a("li",[e._v("Added three standard loggers: "),a("code",[e._v("goyave.Logger")]),e._v(", "),a("code",[e._v("goyave.AccessLogger")]),e._v(" and "),a("code",[e._v("goyave.ErrLogger")])])])]),e._v(" "),a("li",[e._v("Fixed bug: the gzip middleware now closes underlying writer on close.")])]),e._v(" "),a("h2",{attrs:{id:"v2-7-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-7-x"}},[e._v("#")]),e._v(" v2.7.x")]),e._v(" "),a("h3",{attrs:{id:"v2-7-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-7-1"}},[e._v("#")]),e._v(" v2.7.1")]),e._v(" "),a("ul",[a("li",[e._v("Changed MIME type of "),a("code",[e._v("js")]),e._v(" and "),a("code",[e._v("mjs")]),e._v(" files to "),a("code",[e._v("text/javascript")]),e._v(". This is in accordance with an "),a("a",{attrs:{href:"https://datatracker.ietf.org/doc/draft-ietf-dispatch-javascript-mjs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IETF draft"),a("OutboundLink")],1),e._v(" that treats application/javascript as obsolete.")]),e._v(" "),a("li",[e._v("Improved error handling: stacktrace wasn't relevant on unexpected panic since it was retrieved from the route's request handler therefore not including the real source of the panic. Stacktrace retrieval has been moved to the recovery middleware to fix this.")])]),e._v(" "),a("h3",{attrs:{id:"v2-7-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-7-0"}},[e._v("#")]),e._v(" v2.7.0")]),e._v(" "),a("ul",[a("li",[e._v("Added "),a("code",[e._v("Request.Request()")]),e._v(" accessor to get the raw "),a("code",[e._v("*http.Request")]),e._v(".")]),e._v(" "),a("li",[e._v('Fixed a bug allowing non-core middleware applied to the root router to be executed when the "Not Found" or "Method Not Allowed" routes were matched.')]),e._v(" "),a("li",[e._v("Fixed a bug making route groups (sub-routers with empty prefix) conflict with their parent router when two routes having the same path but different methods are registered in both routers.")]),e._v(" "),a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/basics/responses.html#chained-writers"}},[e._v("chained writers")]),e._v(".")],1),e._v(" "),a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/basics/middleware.html#gzip"}},[e._v("gzip compression middleware")]),e._v(".")],1),e._v(" "),a("li",[e._v("Added the ability to register route-specific middleware in "),a("code",[e._v("Router.Static()")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"v2-6-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-6-0"}},[e._v("#")]),e._v(" v2.6.0")]),e._v(" "),a("ul",[a("li",[e._v("Custom router implementation. Goyave is not using gorilla/mux anymore. The new router is twice as fast and uses about 3 times less memory.")]),e._v(" "),a("li",[e._v("Now redirects to configured protocol if request scheme doesn't match.")]),e._v(" "),a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/basics/routing.html#named-routes"}},[e._v("named routes")]),e._v(".")],1),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Route.GetFullURI()")]),e._v(" and "),a("code",[e._v("Route.BuildURL()")]),e._v(" for dynamic URL generation.")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("helper.IndexOfStr()")]),e._v(" and "),a("code",[e._v("helper.ContainsStr()")]),e._v(" for better performance when using string slices.")]),e._v(" "),a("li",[e._v("Moved from GoDoc to "),a("a",{attrs:{href:"https://pkg.go.dev/github.com/System-Glitch/goyave/v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("pkg.go.dev"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Print errors to stderr.")])]),e._v(" "),a("h2",{attrs:{id:"v2-5-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-5-0"}},[e._v("#")]),e._v(" v2.5.0")]),e._v(" "),a("ul",[a("li",[e._v("Added an "),a("RouterLink",{attrs:{to:"/guide/advanced/authentication.html"}},[e._v("authentication system")]),e._v(".")],1),e._v(" "),a("li",[e._v("Various optimizations.")]),e._v(" "),a("li",[e._v("Various documentation improvements.")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("dbMaxLifetime")]),e._v(" configuration entry.")]),e._v(" "),a("li",[e._v("Moved from Travis CI to Github Actions.")]),e._v(" "),a("li",[e._v("Fixed a bug making duplicate log entries on error.")]),e._v(" "),a("li",[e._v("Fixed a bug preventing language lines containing a dot to be retrieved.")]),e._v(" "),a("li",[e._v("Fixed "),a("code",[e._v("TestSuite.GetJSONBody()")]),e._v(" not working with structs and slices.")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("TestSuite.ClearDatabaseTables()")]),e._v(".")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Config.Has()")]),e._v(" and "),a("code",[e._v("Config.Register()")]),e._v(" to check for the existence of a config entry and to allow custom config entries valdiation.")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Request.BearerToken()")]),e._v(".")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Response.HandleDatabaseError()")]),e._v(" for easier database error handling and shorter controller handlers.")])]),e._v(" "),a("h2",{attrs:{id:"v2-4-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-x"}},[e._v("#")]),e._v(" v2.4.x")]),e._v(" "),a("h3",{attrs:{id:"v2-4-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-3"}},[e._v("#")]),e._v(" v2.4.3")]),e._v(" "),a("ul",[a("li",[e._v("Improved string validation by taking grapheme clusters into consideration when calculating length.")]),e._v(" "),a("li",[a("code",[e._v("lang.LoadDefault")]),e._v(" now correctly creates a fresh language map and clones the default "),a("code",[e._v("en-US")]),e._v(" language. This avoids the default language entries to be overridden permanently.")])]),e._v(" "),a("h3",{attrs:{id:"v2-4-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-2"}},[e._v("#")]),e._v(" v2.4.2")]),e._v(" "),a("ul",[a("li",[e._v("Don't override "),a("code",[e._v("Content-Type")]),e._v(" header when sending a file if already set.")]),e._v(" "),a("li",[e._v("Fixed a bug with validation message placeholder "),a("code",[e._v(":values")]),e._v(", which was mistakenly using the "),a("code",[e._v(":value")]),e._v(" placeholder.")])]),e._v(" "),a("h3",{attrs:{id:"v2-4-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-1"}},[e._v("#")]),e._v(" v2.4.1")]),e._v(" "),a("ul",[a("li",[e._v("Bundle default config and language in executable to avoid needing to deploy "),a("code",[e._v("$GOROOT/pkg/mod/github.com/!system-!glitch/goyave/")]),e._v(" with the application.")])]),e._v(" "),a("h3",{attrs:{id:"v2-4-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-0"}},[e._v("#")]),e._v(" v2.4.0")]),e._v(" "),a("ul",[a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/basics/responses.html#response-render"}},[e._v("template rendring")]),e._v(".")],1),e._v(" "),a("li",[e._v("Fixed PostgreSQL options not working.")]),e._v(" "),a("li",[a("code",[e._v("TestSuite.Middleware()")]),e._v(" now has a more realistic behavior: the finalization step of the request life-cycle is now also executed. This may require your tests to be updated if those check the status code in the response.")]),e._v(" "),a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/advanced/status-handlers.html"}},[e._v("status handlers")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"v2-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-3-0"}},[e._v("#")]),e._v(" v2.3.0")]),e._v(" "),a("ul",[a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/advanced/cors.html"}},[e._v("CORS options")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"v2-2-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-2-x"}},[e._v("#")]),e._v(" v2.2.x")]),e._v(" "),a("h3",{attrs:{id:"v2-2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-2-1"}},[e._v("#")]),e._v(" v2.2.1")]),e._v(" "),a("ul",[a("li",[e._v("Added "),a("code",[e._v("domain")]),e._v(" config entry. This entry is used for url generation, especially for the TLS redirect.")]),e._v(" "),a("li",[e._v("Don't show port in TLS redirect response if ports are standard (80 for HTTP, 443 for HTTPS).")])]),e._v(" "),a("h3",{attrs:{id:"v2-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-2-0"}},[e._v("#")]),e._v(" v2.2.0")]),e._v(" "),a("ul",[a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/advanced/testing.html"}},[e._v("testing API")]),e._v(".")],1),e._v(" "),a("li",[e._v("Fixed links in documentation.")]),e._v(" "),a("li",[e._v("Fixed "),a("code",[e._v("models")]),e._v(" package in template project. (Changed to "),a("code",[e._v("model")]),e._v(")")]),e._v(" "),a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/basics/database.html#database-clearregisteredmodels"}},[a("code",[e._v("database.ClearRegisteredModels")])])],1)]),e._v(" "),a("h2",{attrs:{id:"v2-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-1-0"}},[e._v("#")]),e._v(" v2.1.0")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("filesystem.GetMIMEType")]),e._v(" now detects "),a("code",[e._v("css")]),e._v(", "),a("code",[e._v("js")]),e._v(", "),a("code",[e._v("json")]),e._v(" and "),a("code",[e._v("jsonld")]),e._v(" files based on their extension.")]),e._v(" "),a("li",[e._v("Added maintenance mode.\n"),a("ul",[a("li",[e._v("Can be "),a("RouterLink",{attrs:{to:"/guide/advanced/multi-services.html#maintenance-mode"}},[e._v("toggled at runtime")]),e._v(".")],1),e._v(" "),a("li",[e._v("The server can be started in maintenance mode using the "),a("code",[e._v("maintenance")]),e._v(" config option. (Defaults to "),a("code",[e._v("false")]),e._v(")")])])]),e._v(" "),a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/basics/validation.html#validating-arrays"}},[e._v("advanced array validation")]),e._v(", with support for n-dimensional arrays.")],1),e._v(" "),a("li",[e._v("Malformed request messages can now be localized. ("),a("code",[e._v("malformed-request")]),e._v(" and "),a("code",[e._v("malformed-json")]),e._v(" entries in "),a("code",[e._v("locale.json")]),e._v(")")]),e._v(" "),a("li",[e._v("Modified the validator to allow "),a("RouterLink",{attrs:{to:"/guide/basics/validation.html#manual-validation"}},[e._v("manual validation")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"v2-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0"}},[e._v("#")]),e._v(" v2.0.0")]),e._v(" "),a("ul",[a("li",[e._v("Documentation and README improvements.")]),e._v(" "),a("li",[e._v("In the configuration:\n"),a("ul",[a("li",[e._v("The default value of "),a("code",[e._v("dbConnection")]),e._v(" has been changed to "),a("code",[e._v("none")]),e._v(".")]),e._v(" "),a("li",[e._v("The default value of "),a("code",[e._v("dbAutoMigrate")]),e._v(" has been changed to "),a("code",[e._v("false")]),e._v(".")])])]),e._v(" "),a("li",[e._v("Added "),a("RouterLink",{attrs:{to:"/guide/basics/requests.html#accessors"}},[e._v("request data accessors")]),e._v(".")],1),e._v(" "),a("li",[e._v("Some refactoring and package renaming have been done to better respect the Go conventions.\n"),a("ul",[a("li",[e._v("The "),a("code",[e._v("helpers")]),e._v(" package have been renamed to "),a("code",[e._v("helper")])])])]),e._v(" "),a("li",[e._v("The server now shuts down when it encounters an error during startup.")]),e._v(" "),a("li",[e._v("New "),a("RouterLink",{attrs:{to:"/guide/basics/validation.html#validation-getfieldtype"}},[a("code",[e._v("validation.GetFieldType")])]),e._v(" function.")],1),e._v(" "),a("li",[e._v("Config and Lang are now protected with a "),a("code",[e._v("sync.RWMutex")]),e._v(" to avoid data races in multi-threaded environments.")]),e._v(" "),a("li",[e._v("Greatly improve concurrency.")]),e._v(" "),a("li",[e._v("Config can now be reloaded manually.")]),e._v(" "),a("li",[e._v("Added the "),a("RouterLink",{attrs:{to:"/guide/basics/middleware.html#trim"}},[a("code",[e._v("Trim")])]),e._v(" middleware.")],1),e._v(" "),a("li",[a("code",[e._v("goyave.Response")]),e._v(" now implements "),a("code",[e._v("http.ResponseWriter")]),e._v(".\n"),a("ul",[a("li",[e._v("All writing functions can now return an error.")])])]),e._v(" "),a("li",[e._v("Added the "),a("RouterLink",{attrs:{to:"/guide/basics/routing.html#native-handlers"}},[a("code",[e._v("NativeHandler")])]),e._v(" compatibility layer.")],1),e._v(" "),a("li",[e._v("Fixed a bug preventing the static resources handler to find "),a("code",[e._v("index.html")]),e._v(" if a directory with a depth of one was requested without a trailing slash.")]),e._v(" "),a("li",[e._v("Now panics when calling "),a("code",[e._v("Start()")]),e._v(" while the server is already running.")])])])}),[],!1,null,null,null);t.default=v.exports}}]);