(function() {var implementors = {};
implementors["actix_cors"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"actix_service/transform/trait.Transform.html\" title=\"trait actix_service::transform::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_cors/struct.Cors.html\" title=\"struct actix_cors::Cors\">Cors</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/service/struct.ServiceResponse.html\" title=\"struct actix_web::service::ServiceResponse\">ServiceResponse</a>, Error = <a class=\"struct\" href=\"actix_web/error/error/struct.Error.html\" title=\"struct actix_web::error::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,&nbsp;</span>","synthetic":false,"types":["actix_cors::builder::Cors"]}];
implementors["merino_web"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"actix_service/transform/trait.Transform.html\" title=\"trait actix_service::transform::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"merino_web/middleware/metrics/struct.Metrics.html\" title=\"struct merino_web::middleware::metrics::Metrics\">Metrics</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/service/struct.ServiceResponse.html\" title=\"struct actix_web::service::ServiceResponse\">ServiceResponse</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Error\" title=\"type actix_service::Service::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["merino_web::middleware::metrics::Metrics"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"actix_service/transform/trait.Transform.html\" title=\"trait actix_service::transform::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"merino_web/middleware/sentry/struct.Sentry.html\" title=\"struct merino_web::middleware::sentry::Sentry\">Sentry</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/service/struct.ServiceResponse.html\" title=\"struct actix_web::service::ServiceResponse\">ServiceResponse</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Error\" title=\"type actix_service::Service::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["merino_web::middleware::sentry::Sentry"]}];
implementors["tracing_actix_web"] = [{"text":"impl&lt;S, B, RootSpan&gt; <a class=\"trait\" href=\"actix_service/transform/trait.Transform.html\" title=\"trait actix_service::transform::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"tracing_actix_web/struct.TracingLogger.html\" title=\"struct tracing_actix_web::TracingLogger\">TracingLogger</a>&lt;RootSpan&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/service/struct.ServiceResponse.html\" title=\"struct actix_web::service::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/error/struct.Error.html\" title=\"struct actix_web::error::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;RootSpan: <a class=\"trait\" href=\"tracing_actix_web/trait.RootSpanBuilder.html\" title=\"trait tracing_actix_web::RootSpanBuilder\">RootSpanBuilder</a>,&nbsp;</span>","synthetic":false,"types":["tracing_actix_web::middleware::TracingLogger"]}];
implementors["tracing_actix_web_mozlog"] = [{"text":"impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_service/transform/trait.Transform.html\" title=\"trait actix_service::transform::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"tracing_actix_web_mozlog/struct.MozLog.html\" title=\"struct tracing_actix_web_mozlog::MozLog\">MozLog</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/service/struct.ServiceResponse.html\" title=\"struct actix_web::service::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/error/struct.Error.html\" title=\"struct actix_web::error::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: 'static,&nbsp;</span>","synthetic":false,"types":["tracing_actix_web_mozlog::middleware::MozLog"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()