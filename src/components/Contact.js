import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
  
    return (
      <form id='contact'>
      <h1>Me contact</h1>
      <p id="cp">Votre Nom:</p>
      <input type="text"/>
      <p id="cp">Votre Prenom:</p>
      <input type="text"/>
      <p id="cp">Votre Message:</p>
      <input type="text"/>

      <input id="btn" type="submit" value="Envoyer" />
    </form>
        );
  }
}


