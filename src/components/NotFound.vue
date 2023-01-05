<template>
    <h2 style="color: red">
        Ooops! We couldn't find that page. Try again.
        <span>
            <router-link :to="{name: 'home'}">home</router-link>
        </span>
    </h2>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>