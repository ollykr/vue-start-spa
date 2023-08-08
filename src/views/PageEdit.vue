<template>
    <!-- edit {{ route.params.index}} -->
    <h3>Edit {{ page.pageTitle }}</h3>


    <form action="" class="container mb-3">
            <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Page Title
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="page.pageTitle"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Content
                        </label>
                        <textarea
                            type="text"
                            class="form-control"
                            rows="5"
                            v-model="page.content"
                        ></textarea>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link Text
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="page.link.text"

                        />
                    </div>
                    <div class="row mb-3">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                v-model="page.published"
                            >
                            <label class="form-check-label" for="gridCheck1">
                            Published
                            </label>
                        </div>

                    </div>
                </div>
            </div>


            <div class="mb-3">
                <button
                    class="btn btn-primary me-2"
                    @click.prevent="submit"
                >Edit</button>
                <button
                    class="btn btn-secondary me-2"
                    @click.prevent="goToPagesList"
                >Cancel</button>
                <button
                    class="btn btn-danger"
                    @click.prevent="deletePage"
                >Delete</button>
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
const bus = inject('$bus');


const { index } = defineProps(['index']);

let page = pages.getSinglePage(index);

function submit() {
    // 'page' object is suplied
    pages.editPage(index, page);
// globally available bus
    bus.$emit('page-updated', {
        index,
        page

    });

    goToPagesList();
}

function deletePage() {
    pages.removePage(index);
// Tell the rest of the pages that a page was deleted. In this case it is only the navbar component
    bus.$emit('page-deleted', { index });

    // Go to Pages List after you deleted a page
    goToPagesList();

}

function goToPagesList() {
    router.push({ path: '/pages' });

}

</script>