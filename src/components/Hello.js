import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import Input from './Input';

class Hello extends Component {
  state = { noms: '', email: '', age: 0 };

  changementDeNom = (event) => {
    console.log(event.target.value);
    this.setState({ noms: event.target.value });
  };

  changementEmail = (e) => {
    console.log(e.target.value);
    this.setState({ email: e.target.value });
  };

  changementAge = (e) => {
    console.log(e.target.value);
    this.setState({ age: e.target.value });
  };

  afficheLingala = () => {
    console.log(
      `Mbote ${this.state.noms},adresse nayo ezali ${this.state.email},oza na mbula ${this.state.age}`
    );
  };

  afficheFrancais = () => {
    console.log(
      `Bonjour ${this.state.noms},votre adresse mail est ${this.state.email},vous avez ${this.state.age} ans`
    );
  };
  render() {
    return (
      <>
        <Header home='Accueil' about='A propos' disconnect='deconnexion' />
        <Header home='Hiker' about='Abrobro' disconnect='toka inje' />
        <h1>Bonjour à tous</h1>
        <Input auClick={this.changementDeNom} type='text' placeholder='Noms' />
        <Input
          auClick={this.changementEmail}
          type='email'
          placeholder='Email'
        />
        <Input auClick={this.changementAge} type='number' placeholder='Age' />
        <Button afficheMessage={this.afficheFrancais} label='bonjour' />
        <Button afficheMessage={this.afficheLingala} label='mbote' />
        <Footer />
      </>
    );
  }
}

export default Hello;
