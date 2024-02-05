<template>
    <div class="footer">
        <div class="menu">
            <router-link id="menu-home" to="/">Home</router-link>
        
            <router-link id="menu-como-funciona" to="/como-funciona">Como Funciona</router-link>

            <router-link id="menu-doacoes" to="/doacoes">Doações</router-link>
            
            <router-link id="menu-sobre" to="/sobre-o-criador">Sobre o criador</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}

</script>

<style>
    .footer {
        height: 80px;
        width: 100%;
    }

    .menu {
        background-color: #004bad;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }

    .menu > a {
        color: #FFDE59;
        font-size: 20px;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        justify-content: center;
        transition: 0.3s;
    }

    a:hover {
        color: white !important;
        text-decoration: none !important;
        background-color: #1762c4;
        font-size: 30px;
    }
</style>