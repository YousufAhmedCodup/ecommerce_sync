<template>
    <div>
        <div class='bold-line'></div>
        <div class='containerss'>
            <div class='window'>
                <div class='overlay'></div>
                <div class='content'>
                    <div class='welcome'>Login</div>
                    <form action="" autocomplete="off">
                        <div class='input-fields'>
                            <input type='email' placeholder='Email' class='input-line full-width' />
                            <input type='password' placeholder='Password' class='input-line full-width' />
                        </div>
                    </form>
                    <div class='spacing'>Did'nt have an Account? <router-link to="/Signup"><span class='highlight'>Sign
                                up</span></router-link></div>
                    <div>
                        <router-link to="/dashboard/home">
                            <button class='ghost-round full-width'>Login</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,100,500);

body,
html {
    margin: 0;
    height: 100%;
}

input {
    border: none;
}

button:focus {
    outline: none;
}

::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.65);
}

::-webkit-input-placeholder .input-line:focus+::input-placeholder {
    color: rgb(0, 0, 0);
}

.highlight {
    color: rgba(5, 5, 5, 0.8);
    font-weight: 400;
    cursor: pointer;
    transition: color .2s ease;
}

.highlight:hover {
    color: rgb(0, 0, 0);
    transition: color .2s ease;
}

.spacing {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 120px;
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.65)
}

.input-line:focus {
    outline: none;
    border-color: rgb(0, 0, 0);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}

.ghost-round {
    cursor: pointer;
    background: none;
    border: 1px solid rgba(2, 2, 2, 0.65);
    border-radius: 25px;
    color: rgba(0, 0, 0, 0.65);
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
    font-size: 19px;
    font-size: 1.2rem;
    font-family: roboto;
    font-weight: 300;
    line-height: 2.5em;
    margin-top: auto;
    margin-bottom: 25px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}

.ghost-round:hover {
    background: rgba(255, 255, 255, 0.15);
    color: rgb(0, 0, 0);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}

.input-line {
    background: none;
    margin-bottom: 10px;
    line-height: 2.4em;
    color: rgb(0, 0, 0);
    font-family: roboto;
    font-weight: 300;
    letter-spacing: 0px;
    letter-spacing: 0.02rem;
    font-size: 19px;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.65);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}

.full-width {
    width: 100%;
}

.input-fields {
    margin-top: 25px;
}

.containerss {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #e2e8f0;
    height: 100vh;
    width: 100%;
}

.content {
    padding-left: 25px;
    padding-right: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column;
    -ms-flex-flow: column;
    flex-flow: column;
    z-index: 5;
}

.welcome {
    font-weight: 200;
    margin-top: 75px;
    text-align: center;
    font-size: 40px;
    font-size: 2.5rem;
    letter-spacing: 0px;
    letter-spacing: 0.05rem;
}

.subtitle {
    text-align: center;
    line-height: 1em;
    font-weight: 100;
    letter-spacing: 0px;
    letter-spacing: 0.02rem;
}

.menu {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 50px;
}

.window {
    z-index: 100;
    color: rgb(0, 0, 0);
    font-family: roboto;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column;
    -ms-flex-flow: column;
    flex-flow: column;
    box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    height: 560px;
    width: 360px;
    background: #fff;
    background: url('https://pexels.imgix.net/photos/27718/pexels-photo-27718.jpg?fit=crop&w=1280&h=823') top left no-repeat;
}

.overlay {
    background: -webkit-linear-gradient(#ffffff, #dadada);
    background: linear-gradient(#ffffff, #dadada);
    opacity: 0.85;
    filter: alpha(opacity=85);
    height: 560px;
    position: absolute;
    width: 360px;
    z-index: 1;
}

.bold-line {
    background: #e7e7e7;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    width: 100%;
    height: 360px;
    z-index: 1;
    opacity: 0.1;
    background: url('https://pexels.imgix.net/photos/27718/pexels-photo-27718.jpg?fit=crop&w=1280&h=823') left no-repeat;
    background-size: cover;
}

/* @media (max-width: 500px) {
    .window {
        width: 100%;
        height: 100%;
    }

    .overlay {
        width: 100%;
        height: 100%;
    }
} */
</style>
