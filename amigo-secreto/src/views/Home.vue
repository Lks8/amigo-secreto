<template>
    <div class="home">
        <div class="inputs">
            <div class="user">
                <div class="user-name">
                    <p>Nome:</p>
                    <input type="text" v-model="name" />
                </div>
                <div class="user-mail">
                    <p>Email:</p>
                    <input type="email" v-model="mail" />
                </div>
                <div class="user-preference">
                    <p>Presente:</p>
                    <input type="email" v-model="preference" />
                </div>
            </div>

            <div class="add-user">
                <button class="button" @click="addUser()">
                    Adicionar participante
                </button>
            </div>
            <div class="sort">
                <button class="button" @click="sortUsers()">
                    Realizar sorteio
                </button>
            </div>

            <br />

            <div class="submit">
                <!-- <div class="users">               
                    {{ this.users }}
                </div> -->

                <!-- para ver o resultado do sorteio: -->
                <!-- <div v-for="(user, index) in this.finalDraw" :key="index">
                    <span>{{ user.giver.name }} -> {{ user.receiver.name }}</span>
                </div> -->
            </div>

            <div class="mail-to">
                <button class="button" @click="sendAllEmails()">
                    Mandar convites
                </button>
            </div>
        </div>
        <div class="user-table" v-if="this.users!=0">
            <b-table striped hover :items="this.users" :fields="fields"></b-table>
        </div>
        
        <!-- <a href="https://api.whatsapp.com/send?phone=${this.finalDraw[i].giver.phone}&text='Ola${this.finalDraw[0].giver.name}! Você saiu com ${this.finalDraw[0].receiver.name}">Send Message</a> -->
    </div>
</template>

<script>
	import emailjs from "emailjs-com";

    export default {
        name: 'Home',
        components: {},
        
        data() {
                return {
                    name: "",
                    mail: "",
                    preference: "",
                    users: [],
                    finalDraw: [],
                    fields: [
                        { label: "Nome", key: "name" },
                        { label: "E-mail", key: "mail" },
                        { label: "Chocolate preferido", key: "preference" }
                    ]
                };
            },

        methods: {
            addUser() {
                if (this.name == "" || this.mail == "" || this.preference == "") return;
                this.users.push({ name: this.name, mail: this.mail, preference: this.preference });
                this.name = "";
                this.mail = "";
                this.preference = "";
                // this.phone = ''
            },

            sortUsers() {
                let givers = [];
                let receivers = [];

                while (this.users.length != 0) {
                    let randomNumber = Math.floor(
                        (Math.random() * 10) % this.users.length
                    );

                    let drawnUser = this.users[randomNumber];
                    givers.push(drawnUser);

                    if (receivers.length === 0) {
                        receivers.push(drawnUser);
                    } else {
                        receivers.splice(receivers.length - 1, 0, drawnUser);
                    }

                    this.users.splice(randomNumber, 1);
                }

                for (let i = 0; i < givers.length; i++) {
                    this.finalDraw.push({
                        giver: givers[i],
                        receiver: receivers[i],
                    });
                }
            },

            sendAllEmails() {
                for (let i = 0; i < this.finalDraw.length; i++) {
                    this.sendEmail(i);
                }
            },

            sendEmail(i) {
                try {
                    emailjs.send(
                        "service_jpnlnyo",
                        "template_4xioplb",
                        {
                            name: this.finalDraw[i].giver.name,
                            email: this.finalDraw[i].giver.mail,
                            message: `Olá, ${this.finalDraw[i].giver.name}! Seu amigo do ovo é ${this.finalDraw[i].receiver.name}! 
                            Uma sugestão, compre um ${this.finalDraw[i].receiver.preference} de presente, pode confiar!
                            Boas Festas!`,
                        },
                        "lNlNKTTcGacujrEq8"
                    );
                } catch (error) {
                    console.log({ error });
                }
                // Reset form field
                this.name = "";
                this.email = "";
                this.message = "";
                this.preference = "";
                // precisa resetar tambem o grupo dos givers e receivers
            },
        },
    }
</script>

<style>
    .user {
		display: flex;
        flex-direction: column;
        align-items: stretch;
	}
	.add-user,
	.sort {
		margin: 30px;
	}
	span {
		display: block;
	}
    .home {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        min-height: 793px;
    }
    .inputs, .user-table {
        padding: 40px;
        width: 100%;
    }
    input {
        width: 50%;
        margin-right: 10npm,px;
    }
    p {
        font-size: 20px;
        margin-inline: 10px;
        padding-inline: 10px;
    }
    .user-name, .user-mail, .user-preference {
        display: flex;
        align-items: baseline;
        justify-content: center;
    }
</style>
