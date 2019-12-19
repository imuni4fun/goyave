(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{221:function(e,t,a){"use strict";a.r(t);var i=a(0),v=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#v2-2-1"}},[e._v("v2.2.1")])]),a("li",[a("a",{attrs:{href:"#v2-2-0"}},[e._v("v2.2.0")])]),a("li",[a("a",{attrs:{href:"#v2-1-0"}},[e._v("v2.1.0")])]),a("li",[a("a",{attrs:{href:"#v2-0-0"}},[e._v("v2.0.0")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"v2-2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-2-1"}},[e._v("#")]),e._v(" v2.2.1")]),e._v(" "),a("ul",[a("li",[e._v("Added "),a("code",[e._v("domain")]),e._v(" config entry. This entry is used for url generation, especially for the TLS redirect.")]),e._v(" "),a("li",[e._v("Don't show port in TLS redirect response if ports are standard (80 for HTTP, 443 for HTTPS).")])]),e._v(" "),a("h2",{attrs:{id:"v2-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-2-0"}},[e._v("#")]),e._v(" v2.2.0")]),e._v(" "),a("ul",[a("li",[e._v("Added "),a("router-link",{attrs:{to:"/guide/advanced/testing.html"}},[e._v("testing API")]),e._v(".")],1),e._v(" "),a("li",[e._v("Fixed links in documentation.")]),e._v(" "),a("li",[e._v("Fixed "),a("code",[e._v("models")]),e._v(" package in template project. (Changed to "),a("code",[e._v("model")]),e._v(")")]),e._v(" "),a("li",[e._v("Added "),a("router-link",{attrs:{to:"/guide/basics/database.html#database-clearregisteredmodels"}},[a("code",[e._v("database.ClearRegisteredModels")])])],1)]),e._v(" "),a("h2",{attrs:{id:"v2-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-1-0"}},[e._v("#")]),e._v(" v2.1.0")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("filesystem.GetMIMEType")]),e._v(" now detects "),a("code",[e._v("css")]),e._v(", "),a("code",[e._v("js")]),e._v(", "),a("code",[e._v("json")]),e._v(" and "),a("code",[e._v("jsonld")]),e._v(" files based on their extension.")]),e._v(" "),a("li",[e._v("Added maintenance mode.\n"),a("ul",[a("li",[e._v("Can be "),a("router-link",{attrs:{to:"/guide/advanced/multi-services.html#maintenance-mode"}},[e._v("toggled at runtime")]),e._v(".")],1),e._v(" "),a("li",[e._v("The server can be started in maintenance mode using the "),a("code",[e._v("maintenance")]),e._v(" config option. (Defaults to "),a("code",[e._v("false")]),e._v(")")])])]),e._v(" "),a("li",[e._v("Added "),a("router-link",{attrs:{to:"/guide/basics/validation.html#validating-arrays"}},[e._v("advanced array validation")]),e._v(", with support for n-dimensional arrays."),a("Badge",{attrs:{text:"BETA",type:"warn"}})],1),e._v(" "),a("li",[e._v("Malformed request messages can now be localized. ("),a("code",[e._v("malformed-request")]),e._v(" and "),a("code",[e._v("malformed-json")]),e._v(" entries in "),a("code",[e._v("locale.json")]),e._v(")")]),e._v(" "),a("li",[e._v("Modified the validator to allow "),a("router-link",{attrs:{to:"/guide/basics/validation.html#manual-validation"}},[e._v("manual validation")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"v2-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0"}},[e._v("#")]),e._v(" v2.0.0")]),e._v(" "),a("ul",[a("li",[e._v("Documentation and README improvements.")]),e._v(" "),a("li",[e._v("In the configuration:\n"),a("ul",[a("li",[e._v("The default value of "),a("code",[e._v("dbConnection")]),e._v(" has been changed to "),a("code",[e._v("none")]),e._v(".")]),e._v(" "),a("li",[e._v("The default value of "),a("code",[e._v("dbAutoMigrate")]),e._v(" has been changed to "),a("code",[e._v("false")]),e._v(".")])])]),e._v(" "),a("li",[e._v("Added "),a("router-link",{attrs:{to:"/guide/basics/requests.html#accessors"}},[e._v("request data accessors")]),e._v(".")],1),e._v(" "),a("li",[e._v("Some refactoring and package renaming have been done to better respect the Go conventions.\n"),a("ul",[a("li",[e._v("The "),a("code",[e._v("helpers")]),e._v(" package have been renamed to "),a("code",[e._v("helper")])])])]),e._v(" "),a("li",[e._v("The server now shuts down when it encounters an error during startup.")]),e._v(" "),a("li",[e._v("New "),a("router-link",{attrs:{to:"/guide/basics/validation.html#validation-getfieldtype"}},[a("code",[e._v("validation.GetFieldType")])]),e._v(" function.")],1),e._v(" "),a("li",[e._v("Config and Lang are now protected with a "),a("code",[e._v("sync.RWMutex")]),e._v(" to avoid data races in multi-threaded environments.")]),e._v(" "),a("li",[e._v("Greatly improve concurrency.")]),e._v(" "),a("li",[e._v("Config can now be reloaded manually.")]),e._v(" "),a("li",[e._v("Added the "),a("router-link",{attrs:{to:"/guide/basics/middleware.html#trim"}},[a("code",[e._v("Trim")])]),e._v(" middleware.")],1),e._v(" "),a("li",[a("code",[e._v("goyave.Response")]),e._v(" now implements "),a("code",[e._v("http.ResponseWriter")]),e._v(".\n"),a("ul",[a("li",[e._v("All writing functions can now return an error.")])])]),e._v(" "),a("li",[e._v("Added the "),a("router-link",{attrs:{to:"/guide/basics/routing.html#native-handlers"}},[a("code",[e._v("NativeHandler")])]),e._v(" compatibility layer.")],1),e._v(" "),a("li",[e._v("Fixed a bug preventing the static resources handler to find "),a("code",[e._v("index.html")]),e._v(" if a directory with a depth of one was requested without a trailing slash.")]),e._v(" "),a("li",[e._v("Now panics when calling "),a("code",[e._v("Start()")]),e._v(" while the server is already running.")])])])}),[],!1,null,null,null);t.default=v.exports}}]);