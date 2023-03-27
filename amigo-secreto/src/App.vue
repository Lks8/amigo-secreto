<template>
	<div id="app">
		<div class="user">
			<p>Nome:</p>
			<input type="text" v-model="name" />
			<p>Email:</p>
			<input type="email" v-model="mail" />
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

		<div>
			<span> Martins lucas.martins.coelho@gmail.com </span>
			<span> Coelho lucas.martins.coelho@hotmail.com </span>
			<span> 15038637 15.03863-7@maua.br </span>
			<span> UOL luccoelho@uolinc.com </span>
		</div>

        <br>

		<div class="submit">
			<div class="users">
				{{ this.users }}
			</div>

			<div v-for="(user, index) in this.finalDraw" :key="index">
				<span>{{ user.giver.name }} -> {{ user.receiver.name }}</span>
			</div>
		</div>

        <div class="mail-to">
			<button class="button" @click="sendEmails()">
				Mandar convites
			</button>
		</div>

        <!-- <a href="https://api.whatsapp.com/send?phone=${this.finalDraw[i].giver.phone}&text='Ola${this.finalDraw[0].giver.name}! Você saiu com ${this.finalDraw[0].receiver.name}">Send Message</a> -->

	</div>
</template>

<script>
	export default {
		name: "App",
		components: {},

		data() {
			return {
				name: "",
				mail: "",
				users: [],
				givers: [],
				receivers: [],
				finalDraw: [{ giver: "", receiver: "" }],
			};
		},

		methods: {
			addUser() {
				if (this.name == "" || this.mail == "") return;
				this.users.push({ name: this.name, mail: this.mail });
				this.name = "";
				this.mail = "";
				// this.phone = ''
			},

			drawUsers() {
				while (this.users.length != 0) {
					let randomNumber = Math.floor(
						(Math.random() * 10) % this.users.length
					);
					let drawnUser = this.users[randomNumber];
					this.givers.push(drawnUser);
					if (this.receivers.length === 0) {
						this.receivers.push(drawnUser);
					} else {
						this.receivers.splice(
							this.receivers.length - 1,
							0,
							drawnUser
						);
					}
					this.users.splice(randomNumber, 1);
				}
				for (let i = 0; i < this.givers.length; i++) {
					this.finalDraw.push({
						giver: this.givers[i],
						receiver: this.receivers[i],
					});
				}
				this.givers = [];
				this.receivers = [];
			},

            // sendEmails() {
            //     var wppApi = `https://api.whatsapp.com/send?phone=${this.finalDraw[i].giver.phone}&text=Ola ${this.finalDraw[0].giver.name}! Você saiu com ${this.finalDraw[0].receiver.name}`;
            // }
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
