<template>
   <div class="pf-pill">
        <span
            :style="`
                position: absolute;
                height: 1rem;
                border-radius: .5rem;
                width: ${progress}%;
                background: ${color[stat]};`"
        ></span>
    </div>
</template>

<script>
export default {
    name: 'status-bar',
    props: {
        progress: {
            type: Number,
            required: true
        },
        stat: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            color: {
                hp: '#B4FF99',
                attack: '#C20000',
                defense: '#007CC2',
                "special-attack": '#5C00A4',
                "special-defense": '#9EDEF9',
                speed: '#FFDB7E'
            }
        }
    }
}
</script>
