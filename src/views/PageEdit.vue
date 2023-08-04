<template>
    <!-- edit {{ route.params.index}} -->
    <h3>Edit {{ page.pageTitle }}</h3>


    <form>
            <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                <label for="" class="form-label">
                    Page Title
                </label>
                <!-- v-model binds a data property to that form control -->
                <input type="text" class="form-control"
                v-model="page.pageTitle"
                >
                </div>
                <div class="mb-3"><label for="" class="form-label">
                        Content
                    </label>
                    <textarea name=""
                    rows="5"
                    class="form-control"
                    v-model="page.content"
                    >
                </textarea>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                    Link Text
                    </label>
                    <input type="text" class="form-control"
                    v-model="page.link.text"
                    >
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input id="gridCheck1" class="form-check-input"
                        type="checkbox"
                        v-model="page.published">
                        <label for="gridCheck1" class="form-check-label">
                            Published
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <button
                 class="btn btn-primary me-2"
                 @click.prevent="submit"
                 >Edit</button>
                 <button
                     class="btn btn-secondary">Cancel</button>
            </div>
        </div>
        </form>

</template>
<!-- get params for edit view -->
<script setup>
// import useRoute function
import { useRouter } from "vue-router";
import { inject } from "vue";
const router = useRouter();
const pages = inject('$pages');


const { index } = defineProps(['index']);

let page = pages.getSinglePage(index);

function submit() {
    // 'page' object is suplied
    pages.editPage(index, page);


}

</script>