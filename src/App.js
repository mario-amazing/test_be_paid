import './App.css';
import Bulma from '@vizuaalog/bulmajs';

import 'bulma/css/bulma.min.css';

function App() {

  const alert = function() {
    Bulma().alert({
      type: 'success',
      title: 'В жопу тебя раз!',
      body: '👉👌',
      confirm: {
        label: 'Повторить!',
        onClick: function() {
          Bulma().alert({
            type: 'success',
            title: 'В жопу тебя два!',
            body: '👉👉👌',
            confirm: {
              label: 'Повторить!',
              onClick: function() {
                Bulma().alert({
                  title: 'Ну все, хватит с тебя',
                  body: '🌚🌝',
                  confirm: 'Я попозже зайду!',
                });
              },
            },
            cancel: 'Ок :)'
          })
        },
      },
      cancel: 'Ок :)'
    })
  }
  return (
    <div class="content has-text-centered pt-1">
      <button className='button is-large content has-text-centered' onClick={alert}>Нуу нажмииииии на меня</button>
    </div>
  );
}

export default App;

