import React, {Component} from 'react';

var PORT;

PORT = window.location.port || 1337;
console.log(PORT);

export class Remove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formulas: [],
            name: [],
            value: '',
            output: '',
            animate: '',
            id: '',
            timeout: null,
            url: 'http://localhost:' + PORT + '/api'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetMessages() {
        if (this.state.timeout !== null) {
            clearTimeout(this.state.timeout);
        }
        setTimeout(() => {
            this.setState({
                animate: '',
                output: '',
                timeout: null
            });
        }, 3500);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        //this.add(event);
        //this.state.name.push(event.target.value);
        console.log('A formula was submitted: ' + this.state.id);
        event.preventDefault();

        //const myHeaders = new Headers();

        const myInit = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"id": this.state.id})
        };

        fetch(this.state.url + '/remove', myInit)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                this.setState({
                    formulas: this.state.formulas.filter(formula => formula._id !== this.state.id)
                });
                console.log("state", data);
                this.setState({output: "Formeln raderades!"});
                this.setState({animate: "animate"});
                console.log(data);
                this.resetMessages();
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }

    componentDidMount() {
        fetch(this.state.url + '/read')
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                this.setState({formulas: data});
                console.log("state", data);
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }
    render() {
        return (
            <div>
                <h2>Radera från databas</h2>
                <p>Detta är en demo av CRUD-operationer med hjälp av Mongodb.</p>
                <p>Här kan du radera objekt ifrån databasen:</p>
                <form onSubmit={this.handleSubmit}>
                    <select name="id" onChange={this.handleChange}>
                        {
                            this.state.formulas.map((data, i) => {
                                return <option key={i} value={data._id}>{data.name}</option>;
                            })
                        }
                    </select>
                    <input className="btn" type="submit" value="Ta bort" />
                </form>
                <div className={"output " + this.state.animate}>{this.state.output}</div>
            </div>
        );
    }
}
export default Remove;
