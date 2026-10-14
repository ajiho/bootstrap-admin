class Bus {
  channel = new BroadcastChannel("adminlts");

  emit(type, data) {
    this.channel.postMessage({
      type,
      data,
    });
  }

  on(type, callback) {
    this.channel.addEventListener("message", (event) => {
      if (event.data.type === type) {
        callback(event.data.data);
      }
    });
  }
}

export default new Bus();
