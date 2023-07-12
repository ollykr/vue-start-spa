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

<script>
// Simple prop definitions
export default {
    props: ['pageCreated'],
    // for visual cues error validation
    computed: {
        isFormInvalid() {
            // return true if none of the fields are filled
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
        }
    },
    data() {
        return {
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: '',
            published: true
        }
    },
    methods: {
        // we don't need to add any external data such as an event object (e) e.g submitForm(e) because all the data we need is in data() function, e.g pageTitle, content, etc.
        submitForm() {
            // make sure we have some values
            // if one of these values is missing , we can't create the object
            if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
                alert('Please fill the form.');
                return;
            }
// if do have all the data, then we pass in the object that has pageTitle, content, etc
            this.pageCreated({
                pageTitle: this.pageTitle,
                content: this.content,
                link: {
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            });
// Clear the page adding form/clear values/back to the original form
            this.pageTitle = '';
            this.content = '';
            this.linkText = '';
            this.linkUrl = '';
            this.published = true;


        }

    }
}
</script>