var vertx = vertx || {};

if (!vertx.NetServer) {
  vertx.NetServer = function() {
    return new org.vertx.java.core.net.NetServer();
  }

  vertx.NetClient = function() {
    return new org.vertx.java.core.net.NetClient();
  }
}
