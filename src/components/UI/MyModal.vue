<template>
  <div class="modal" v-if="modal.show" @click.stop="hideModal">
    <div @click.stop class="modal__content"><slot></slot></div>
  </div>
</template>
<script setup>
import { useModalStore } from '../../store/modal';
const modal = useModalStore()

const hideModal = () => {
    modal.show = false
}

</script>
<style>
    .modal{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.6);
        display: flex;
        position: fixed;
    }
    .modal__content{
        margin: auto;
        min-width: 500px;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
    }
</style>
