<template>
	<div id="app">
		<div class="user">
			<p>Nome:</p>
			<input type="text" v-model="name" />
			<p>Email:</p>
			<input type="email" v-model="mail" />
            <p>Chocolate favorito:</p>
			<input type="email" v-model="preference" />
			<!-- <p>Telefone: </p>
            <input v-model="user.phone"> -->
		</div>

		<div class="add-user">
			<button class="button" @click="addUser()">
				Adicionar participante
			</button>
		</div>
		<div class="sort">
			<button class="button" @click="drawUsers()">
				Realizar sorteio
			</button>
		</div>

		<br />

		<div class="submit">
			<div class="users">               
				{{ this.users }}
			</div>

			<!-- <div v-for="(user, index) in this.finalDraw" :key="index">
				<span>{{ user.giver.name }} -> {{ user.receiver.name }}</span>
			</div> -->
		</div>

		<div class="mail-to">
			<button class="button" @click="sendAllEmails()">
				Mandar convites
			</button>
		</div>

		<!-- <a href="https://api.whatsapp.com/send?phone=${this.finalDraw[i].giver.phone}&text='Ola${this.finalDraw[0].giver.name}! Você saiu com ${this.finalDraw[0].receiver.name}">Send Message</a> -->
	</div>
</template>

<script>
	import emailjs from "emailjs-com";

	export default {
		name: "App",
		components: {},

		data() {
			return {
				name: "",
				mail: "",
                preference: "",
				users: [],
				finalDraw: [],
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

			drawUsers() {
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
                            Uma sugestão, compre um ${this.finalDraw[i].giver.preference} de presente, pode confiar!
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
			},
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.user {
		display: block;
	}
	.add-user,
	.sort {
		margin: 30px;
	}
	span {
		display: block;
	}
</style>
