<template>
<div class="container mb-3">
    <!-- v-model creates two way binding -->
    <form action="">
        <div class="row">
        <div class="col-md-8">
            <div class="mb-3">
            <label for="" class="form-label">
                Page Title
            </label>
            <!-- @input registers the whatever value added inside pageTitle form field in a browser, @input="(e) => pageTitle = e.target" it is two-way binding, v-model does the same but it is simpler-->
            <!-- v-model binds a data property to that form control -->
            <input type="text" class="form-control"
            v-model="pageTitle"
            >
            </div>
            <div class="mb-3"><label for="" class="form-label">
                    Content
                </label>
                <textarea name=""
                id=""
                cols="30"
                rows="10"
                class="form-control"
                v-model="content"
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
                v-model="linkText"
                >
            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                    Link URL
                </label>
                <input type="text" class="form-control"
                v-model="linkUrl"
                >
            </div>
            <div class="row mb-3">
                <div class="form-check">
                    <input id="gridCheck1" class="form-check-input" type="checkbox" v-model="published">
                    <label for="gridCheck1" class="form-check-label">
                        Published
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <!-- submitForm method -->
            <!-- When disabled is true, then the button is disabled -->
            <button
             class="btn btn-primary"
             :disabled="isFormInvalid"
             @click.prevent="submitForm"
             >Create Page</button>
        </div>
    </div>
    </form>
</div>

</template>

<!-- Define our scripts -->
<script setup>
import { inject, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
// to interact with our pageStore
const pages = inject('$pages');

const bus = inject('$bus');

const router = useRouter();

let pageTitle = ref('');
let content = ref('');
let linkText = ref('');
let linkUrl = ref('');
let published = ref(true);

// we don't need to use 'this' since we are using a simple vars (let)

function submitForm() {
    // make sure we have some values
    // if one of these values is missing , we can't create the object
    if (!pageTitle || !content || !linkText) {
        alert('Please fill the form.');
        return;
    }
    // Emited event, $ means it is public property
    // It is something that's encouraged to use inside of our components
    // We want to emit an event called 'pageCreated' with an argument which is an object that's created

// Add pages to a dataStore

// Create a new Page object
    let newPage = {
        pageTitle,
        content,
        link: {
            text: linkText,
        },
        published
    };
// Pass a new Page object to pages as addPage method's parameter
    pages.addPage(newPage);

    // page-created and not pageCreated to re-use formatting used for edit page
    bus.$emit('page-created', newPage);

    router.push({ path: '/pages' });
}

// Create a var with the same name as a prop we use in Options API
// We call in a computed function that accepts a callback function that checks the values of a form
const isFormInvalid = computed(() => !pageTitle || !content || !linkText);

// A Watcher
// Watches pageTitle value
// whatever we are watching has to be reactive i.e using "ref"
// as an argument we pass in a callback function which executes whenever pageTitle value changes
watch(pageTitle, (newTitle, oldTitle) => {
    // see if a link text equals an oldTitle
    // if it is, then we know that a user didn't change a link text and we can update a link text to be the same as a new title
    if (linkText === oldTitle) {
        linkText = newTitle;
    }

});

</script>

