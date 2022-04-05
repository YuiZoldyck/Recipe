<template>
    <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <img :src="data2.path" />
            <h1>{{data2.title}}</h1>
            <p>{{data2.description}}</p>
            <button class="modal-default-button" @click="$emit('close')">Close Recipe</button>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script>
    export default {

    props: {
        data: {
            title: String,
            description: String,
            path: String
        }
    },
    data() {
        return {
            data2: this.data
        }
    },


  };
  
</script>

<style>

img {
    isplay: inline-flex;
    float: right;
    width: 30%;
}

button {
    width: 15%;
    background: #fff7da;
    color: #8D7263;
    border: 1px solid #8c7162;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 85%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
    position: absolute;
    right: 15px;
    bottom: 65px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>