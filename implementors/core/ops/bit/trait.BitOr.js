(function() {var implementors = {};
implementors["ahash"] = [{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;'_ <a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt;&gt; for &amp;<a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["ahash::hash_set::AHashSet"]}];
implementors["bitmaps"] = [{"text":"impl&lt;Size:&nbsp;<a class=\"trait\" href=\"bitmaps/trait.Bits.html\" title=\"trait bitmaps::Bits\">Bits</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"bitmaps/struct.Bitmap.html\" title=\"struct bitmaps::Bitmap\">Bitmap</a>&lt;Size&gt;&gt; for <a class=\"struct\" href=\"bitmaps/struct.Bitmap.html\" title=\"struct bitmaps::Bitmap\">Bitmap</a>&lt;Size&gt;","synthetic":false,"types":["bitmaps::bitmap::Bitmap"]}];
implementors["dashmap"] = [{"text":"impl&lt;'a, K:&nbsp;'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, V:&nbsp;'a, S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Q:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.reference.html\">&amp;'_ </a>Q&gt; for &amp;'a <a class=\"struct\" href=\"dashmap/struct.DashMap.html\" title=\"struct dashmap::DashMap\">DashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;Q&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,&nbsp;</span>","synthetic":false,"types":["dashmap::DashMap"]}];
implementors["endian_type"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"endian_type/struct.BigEndian.html\" title=\"struct endian_type::BigEndian\">BigEndian</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"endian_type/struct.BigEndian.html\" title=\"struct endian_type::BigEndian\">BigEndian</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>,&nbsp;</span>","synthetic":false,"types":["endian_type::BigEndian"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"endian_type/struct.LittleEndian.html\" title=\"struct endian_type::LittleEndian\">LittleEndian</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"endian_type/struct.LittleEndian.html\" title=\"struct endian_type::LittleEndian\">LittleEndian</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>,&nbsp;</span>","synthetic":false,"types":["endian_type::LittleEndian"]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;'_ <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;&gt; for &amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;'_ <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S2&gt;&gt; for &amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::set::IndexSet"]}];
implementors["isahc"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"isahc/auth/struct.Authentication.html\" title=\"struct isahc::auth::Authentication\">Authentication</a>&gt; for <a class=\"struct\" href=\"isahc/auth/struct.Authentication.html\" title=\"struct isahc::auth::Authentication\">Authentication</a>","synthetic":false,"types":["isahc::auth::Authentication"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"isahc/config/struct.SslOption.html\" title=\"struct isahc::config::SslOption\">SslOption</a>&gt; for <a class=\"struct\" href=\"isahc/config/struct.SslOption.html\" title=\"struct isahc::config::SslOption\">SslOption</a>","synthetic":false,"types":["isahc::config::ssl::SslOption"]}];
implementors["mio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"mio/struct.Interest.html\" title=\"struct mio::Interest\">Interest</a>&gt; for <a class=\"struct\" href=\"mio/struct.Interest.html\" title=\"struct mio::Interest\">Interest</a>","synthetic":false,"types":["mio::interest::Interest"]}];
implementors["openssl"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/cms/struct.CMSOptions.html\" title=\"struct openssl::cms::CMSOptions\">CMSOptions</a>&gt; for <a class=\"struct\" href=\"openssl/cms/struct.CMSOptions.html\" title=\"struct openssl::cms::CMSOptions\">CMSOptions</a>","synthetic":false,"types":["openssl::cms::CMSOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspFlag.html\" title=\"struct openssl::ocsp::OcspFlag\">OcspFlag</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspFlag.html\" title=\"struct openssl::ocsp::OcspFlag\">OcspFlag</a>","synthetic":false,"types":["openssl::ocsp::OcspFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7Flags.html\" title=\"struct openssl::pkcs7::Pkcs7Flags\">Pkcs7Flags</a>&gt; for <a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7Flags.html\" title=\"struct openssl::pkcs7::Pkcs7Flags\">Pkcs7Flags</a>","synthetic":false,"types":["openssl::pkcs7::Pkcs7Flags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslOptions.html\" title=\"struct openssl::ssl::SslOptions\">SslOptions</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslOptions.html\" title=\"struct openssl::ssl::SslOptions\">SslOptions</a>","synthetic":false,"types":["openssl::ssl::SslOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslMode.html\" title=\"struct openssl::ssl::SslMode\">SslMode</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslMode.html\" title=\"struct openssl::ssl::SslMode\">SslMode</a>","synthetic":false,"types":["openssl::ssl::SslMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslVerifyMode.html\" title=\"struct openssl::ssl::SslVerifyMode\">SslVerifyMode</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslVerifyMode.html\" title=\"struct openssl::ssl::SslVerifyMode\">SslVerifyMode</a>","synthetic":false,"types":["openssl::ssl::SslVerifyMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslSessionCacheMode.html\" title=\"struct openssl::ssl::SslSessionCacheMode\">SslSessionCacheMode</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslSessionCacheMode.html\" title=\"struct openssl::ssl::SslSessionCacheMode\">SslSessionCacheMode</a>","synthetic":false,"types":["openssl::ssl::SslSessionCacheMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.ExtensionContext.html\" title=\"struct openssl::ssl::ExtensionContext\">ExtensionContext</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.ExtensionContext.html\" title=\"struct openssl::ssl::ExtensionContext\">ExtensionContext</a>","synthetic":false,"types":["openssl::ssl::ExtensionContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.ShutdownState.html\" title=\"struct openssl::ssl::ShutdownState\">ShutdownState</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.ShutdownState.html\" title=\"struct openssl::ssl::ShutdownState\">ShutdownState</a>","synthetic":false,"types":["openssl::ssl::ShutdownState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/x509/verify/struct.X509CheckFlags.html\" title=\"struct openssl::x509::verify::X509CheckFlags\">X509CheckFlags</a>&gt; for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509CheckFlags.html\" title=\"struct openssl::x509::verify::X509CheckFlags\">X509CheckFlags</a>","synthetic":false,"types":["openssl::x509::verify::X509CheckFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyFlags.html\" title=\"struct openssl::x509::verify::X509VerifyFlags\">X509VerifyFlags</a>&gt; for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyFlags.html\" title=\"struct openssl::x509::verify::X509VerifyFlags\">X509VerifyFlags</a>","synthetic":false,"types":["openssl::x509::verify::X509VerifyFlags"]}];
implementors["tokio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"tokio/io/struct.Interest.html\" title=\"struct tokio::io::Interest\">Interest</a>&gt; for <a class=\"struct\" href=\"tokio/io/struct.Interest.html\" title=\"struct tokio::io::Interest\">Interest</a>","synthetic":false,"types":["tokio::io::driver::interest::Interest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"tokio/io/struct.Ready.html\" title=\"struct tokio::io::Ready\">Ready</a>&gt; for <a class=\"struct\" href=\"tokio/io/struct.Ready.html\" title=\"struct tokio::io::Ready\">Ready</a>","synthetic":false,"types":["tokio::io::driver::ready::Ready"]}];
implementors["tracing_subscriber"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"tracing_subscriber/fmt/format/struct.FmtSpan.html\" title=\"struct tracing_subscriber::fmt::format::FmtSpan\">FmtSpan</a>&gt; for <a class=\"struct\" href=\"tracing_subscriber/fmt/format/struct.FmtSpan.html\" title=\"struct tracing_subscriber::fmt::format::FmtSpan\">FmtSpan</a>","synthetic":false,"types":["tracing_subscriber::fmt::format::FmtSpan"]}];
implementors["typenum"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":false,"types":["typenum::bit::B0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":false,"types":["typenum::bit::B0"]},{"text":"impl&lt;Rhs:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":false,"types":["typenum::bit::B1"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;U&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":false,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, U:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt;","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()