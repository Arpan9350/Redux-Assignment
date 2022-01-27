import axios from 'axios';

const initialstate = { data: [], error: {}, flag: false };



const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regexname = RegExp(/^[A-Za-z]{3,30}$/);
const regForPass =RegExp(/^(.{0,7}|[^0-9]|[^A-Z]|[^a-z]|[a-zA-Z0-9])$/);

const regForContact = RegExp(/^[6-9][0-9]{9}/)

export const updateState = (state = initialstate, action) => {
    
    switch (action.type) {
        case "Register":
            let clean = true;
            let errordata = { name: '', username: '', contact: '', email: '', password: '', cpassword: "", fieldError: '' }

            if (!regexname.test(action.payload.name)) {
                errordata.name = 'Name should contain only alphabets';
                clean = false;

            }
            if (!regexname.test(action.payload.username)) {
                errordata.username = 'username should be character ';
                clean = false;

            }

            if (!regForEmail.test(action.payload.email)) {
                errordata.email = 'Enter valid email';
                clean = false;

            }
            if (!regForContact.test(action.payload.contact)) {
                errordata.contact = 'Enter 10 digit no';
                clean = false;

            }
            if (regForPass.test(action.payload.pass)) {
                // console.log(action.payload.pass);
                errordata.password = 'enter valid password';
                clean = false;

            }
            if (!(action.payload.pass == action.payload.cpassword)) {
                errordata.cpassword = ' password does not match';
                clean = false;

            }
            if (clean) {
                console.log(action.payload);
                let details = { ...action.payload, recipe: [] }
                axios.post("http://localhost:3001/users", details);
                return { data: [action.payload], error: errordata, flag: true };
            }
            return { data: state.data, error: errordata, flag: false };
        // case "Login":
        //     axios.get("http://localhost:3001/users")
        //         .then(res => {
        //             state.data=res.data
        //         })
        //         state.data.forEach(ele => {

        //         if (action.payload.email === ele.email && action.payload.pass === ele.password) {
        //             state.flagone=true;

        //             console.log(ele)

        //         }
        //     })
        //     if (state.flagone) {
        //         alert("email or passwrod doesnot match")

        //     }

        default: return state;

    }
}



