const { createApp, ref } = Vue;

createApp({
  setup(){

    const user = ref('Loading');
    const datosUser = ref({})

    /* Actions */
    const logoutUser = () => {

        if (user.value) {

            firebaseAuth.signOut();

        } else {

            location.href = './index.html';

        }
    };

    const goUtm = () => {
        location.href = './index.html?utm_source=facebook&utm_medium=email&utm_campaign=pre'
    }

    return {
        user,
        logoutUser,
        goUtm,
        datosUser
    }

  },

  async mounted() {

    await firebaseAuth.onAuthStateChanged(user => {
        if (user) {
            this.user = true
            const userId = firebaseAuth.currentUser.uid;
            const getUser = db.collection('users/').doc(userId)
            getUser.get().then(doc => {
                const d = doc.data();
                this.datosUser.name = d.name;
            });
        } else {
            this.user = false
        }
    })

  }

}).mount('#app')