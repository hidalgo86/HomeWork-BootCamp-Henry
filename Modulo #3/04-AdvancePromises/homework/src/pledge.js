"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

class $Promise {
  constructor(executor) {
    this._state = "pending";
    this._value = undefined;
    this._handlerGroups = [];
    if (typeof executor !== "function") {
      throw new TypeError('El executor no es una "function"');
    }
    executor(
      (data) => this._internalResolve(data),
      (data) => this._internalReject(data)
    );
  }

  _internalResolve(data) {
    if (this._state === "pending") {
      this._state = "fulfilled";
      this._value = data;
      this._callHandlers();
    }
  }

  _internalReject(data) {
    if (this._state === "pending") {
      this._state = "rejected";
      this._value = data;
      this._callHandlers();
    }
  }

  _callHandlers() {
    while (this._handlerGroups.length) {
      const hd = this._handlerGroups.shift();
      if (this._state === "fulfilled") {
        if (hd.successCb) {
          try {
            const result = hd.successCb(this._value);
            if (result instanceof $Promise) {
              return result.then(
                (data) => hd.downstreamPromise._internalResolve(data),
                (error) => hd.downstreamPromise._internalReject(error)
              );
            }
            hd.downstreamPromise._internalResolve(result);
          } catch (err) {
            hd.downstreamPromise._internalReject(err);
          }
        } else {
          hd.downstreamPromise._internalResolve(this._value);
        }
      }
      if (this._state === "rejected") {
        if (hd.errorCb) {
          try {
            const result = hd.errorCb(this._value);
            if (result instanceof $Promise) {
              return result.then(
                (data) => hd.downstreamPromise._internalResolve(data),
                (error) => hd.downstreamPromise._internalReject(error)
              );
            }
            hd.downstreamPromise._internalResolve(result);
          } catch (err) {
            hd.downstreamPromise._internalReject(err);
          }
        } else {
          hd.downstreamPromise._internalReject(this._value);
        }
      }
    }
  }

  then(successCb, errorCb) {
    const downstreamPromise = new $Promise(() => {});
    if (typeof successCb !== "function") {
      successCb = false;
    }
    if (typeof errorCb !== "function") {
      errorCb = false;
    }
    this._handlerGroups.push({ successCb, errorCb, downstreamPromise });
    if (this._state !== "pending") {
      this._callHandlers();
    }
    return downstreamPromise;
  }

  catch(errorCb) {
    return this.then(null, errorCb);
  }

  static resolve(value) {
    if (value instanceof $Promise) {
      return value;
    }
    const promise = new $Promise(() => {});
    promise._internalResolve(value);
    return promise;
  }

  static all(array) {
    if (!Array.isArray(array)) {
      throw new TypeError("El argumento no es un array");
    }
    const promise = new $Promise((resolve, reject) => {
      const promiseArray = array.map((promise) => $Promise.resolve(promise));
      const results = Array(array.length);
      let pendingCount = array.length;
      promiseArray.forEach((promise, i) => {
        promise.then(
          (value) => {
            results[i] = value;
            pendingCount--;
            if (pendingCount === 0) {
              resolve(results);
            }
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
    return promise;
  }
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/

// const axios = require("axios").default;
// ​
// let posts;
// ​
// axios
// .get("https://jsonplaceholder.typicode.com/posts")
// .then((response) => {
//     posts = response.data;
//     const userIds = new Set();
// ​
//     posts.forEach((post) => userIds.add(post.userId));
// ​
//     return Promise.all(
//       Array.from(userIds).map((userId) =>
//         axios.get("https://jsonplaceholder.typicode.com/users/" + userId)
//       )
//     );
// })
// .then((userResponses) => {
//     posts.forEach(
//       (post) =>
//         (post.user = userResponses.find(
//           (userResponse) => userResponse.data.id === post.userId
//         ).data)
//     );
//     console.log(posts);
// });
