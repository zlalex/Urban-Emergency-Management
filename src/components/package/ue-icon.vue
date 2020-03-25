<template>
    <svg class="ue-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${iconName}`" />
    </svg>
</template>
<script>
export default {
    name: 'ue-icon',
    props: {
        iconName: String
    }
};
</script>