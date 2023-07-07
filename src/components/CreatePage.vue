<template>
<div class="container mb-3">
    <form action="">
        <div class="mb-3">
            <label for="" class="form-label">
                Page Title
            </label>
            <!-- @input registers the whatever value added inside pageTitle form field in a browser, @input="(e) => pageTitle = e.target" it is two-way binding-->
            <input type="text" class="form-control"
            :value="pageTitle"
            @input="(e) => pageTitle = e.target.value"
            >
        </div>
        <div class="mb-3"><label for="" class="form-label">
                    Content
                </label>
            <textarea name=""
            id=""
            cols="30"
            rows="10"
            class="form-control">
        </textarea>
            </div>
        <div class="mb-3">
            <button
             class="btn btn-primary"
             @click.prevent="pageCreated({pageTitle})"
             >Create Page</button>
            </div>
    </form>
</div>

</template>

<script>
// Simple prop definition
export default {
    props: ['pageCreated'],
    data() {
        return {
    pageTitle: ''
}

    }
}
</script>