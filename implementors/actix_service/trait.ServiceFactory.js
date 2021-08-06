(function() {var implementors = {};
implementors["actix_http"] = [{"text":"impl&lt;T, S, B, X, U&gt; <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"actix_http/enum.Protocol.html\" title=\"enum actix_http::Protocol\">Protocol</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"actix_http/struct.HttpService.html\" title=\"struct actix_http::HttpService\">HttpService</a>&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Future\" title=\"type actix_service::ServiceFactory::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Error\" title=\"type actix_service::ServiceFactory::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.InitError\" title=\"type actix_service::ServiceFactory::InitError\">InitError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Response\" title=\"type actix_service::ServiceFactory::Response\">Response</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Service\" title=\"type actix_service::ServiceFactory::Service\">Service</a> as <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;&gt;::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"actix_http/body/trait.MessageBody.html#associatedtype.Error\" title=\"type actix_http::body::MessageBody::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>, Response = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Future\" title=\"type actix_service::ServiceFactory::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Error\" title=\"type actix_service::ServiceFactory::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.InitError\" title=\"type actix_service::ServiceFactory::InitError\">InitError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, <a class=\"struct\" href=\"actix_codec/framed/struct.Framed.html\" title=\"struct actix_codec::framed::Framed\">Framed</a>&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">)</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>, Response = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Future\" title=\"type actix_service::ServiceFactory::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Error\" title=\"type actix_service::ServiceFactory::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.InitError\" title=\"type actix_service::ServiceFactory::InitError\">InitError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["actix_http::service::HttpService"]},{"text":"impl <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;&gt; + 'static, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt;&gt;&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.ExpectHandler.html\" title=\"struct actix_http::h1::ExpectHandler\">ExpectHandler</a>","synthetic":false,"types":["actix_http::h1::expect::ExpectHandler"]},{"text":"impl&lt;T, S, B, X, U&gt; <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.H1Service.html\" title=\"struct actix_http::h1::H1Service\">H1Service</a>&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Future\" title=\"type actix_service::ServiceFactory::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Error\" title=\"type actix_service::ServiceFactory::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Response\" title=\"type actix_service::ServiceFactory::Response\">Response</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.InitError\" title=\"type actix_service::ServiceFactory::InitError\">InitError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"actix_http/body/trait.MessageBody.html#associatedtype.Error\" title=\"type actix_http::body::MessageBody::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>, Response = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Future\" title=\"type actix_service::ServiceFactory::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Error\" title=\"type actix_service::ServiceFactory::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.InitError\" title=\"type actix_service::ServiceFactory::InitError\">InitError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, <a class=\"struct\" href=\"actix_codec/framed/struct.Framed.html\" title=\"struct actix_codec::framed::Framed\">Framed</a>&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">)</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>, Response = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Future\" title=\"type actix_service::ServiceFactory::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Error\" title=\"type actix_service::ServiceFactory::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.InitError\" title=\"type actix_service::ServiceFactory::InitError\">InitError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["actix_http::h1::service::H1Service"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;&gt; + 'static, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt;&gt;, <a class=\"struct\" href=\"actix_codec/framed/struct.Framed.html\" title=\"struct actix_codec::framed::Framed\">Framed</a>&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.UpgradeHandler.html\" title=\"struct actix_http::h1::UpgradeHandler\">UpgradeHandler</a>","synthetic":false,"types":["actix_http::h1::upgrade::UpgradeHandler"]},{"text":"impl&lt;T, S, B&gt; <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"actix_http/h2/struct.H2Service.html\" title=\"struct actix_http::h2::H2Service\">H2Service</a>&lt;T, S, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Future\" title=\"type actix_service::ServiceFactory::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Error\" title=\"type actix_service::ServiceFactory::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Response\" title=\"type actix_service::ServiceFactory::Response\">Response</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S::<a class=\"type\" href=\"actix_service/trait.ServiceFactory.html#associatedtype.Service\" title=\"type actix_service::ServiceFactory::Service\">Service</a> as <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;&gt;::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"actix_http/body/trait.MessageBody.html#associatedtype.Error\" title=\"type actix_http::body::MessageBody::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["actix_http::h2::service::H2Service"]}];
implementors["actix_service"] = [];
implementors["actix_tls"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_tls/connect/trait.Address.html\" title=\"trait actix_tls::connect::Address\">Address</a>&gt; <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connect.html\" title=\"struct actix_tls::connect::Connect\">Connect</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.TcpConnectorFactory.html\" title=\"struct actix_tls::connect::TcpConnectorFactory\">TcpConnectorFactory</a>","synthetic":false,"types":["actix_tls::connect::connector::TcpConnectorFactory"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_tls/connect/trait.Address.html\" title=\"trait actix_tls::connect::Address\">Address</a>&gt; <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connect.html\" title=\"struct actix_tls::connect::Connect\">Connect</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.ResolverFactory.html\" title=\"struct actix_tls::connect::ResolverFactory\">ResolverFactory</a>","synthetic":false,"types":["actix_tls::connect::resolve::ResolverFactory"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_tls/connect/trait.Address.html\" title=\"trait actix_tls::connect::Address\">Address</a>&gt; <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connect.html\" title=\"struct actix_tls::connect::Connect\">Connect</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.ConnectServiceFactory.html\" title=\"struct actix_tls::connect::ConnectServiceFactory\">ConnectServiceFactory</a>","synthetic":false,"types":["actix_tls::connect::service::ConnectServiceFactory"]}];
implementors["actix_web"] = [{"text":"impl <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/struct.Route.html\" title=\"struct actix_web::Route\">Route</a>","synthetic":false,"types":["actix_web::route::Route"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()