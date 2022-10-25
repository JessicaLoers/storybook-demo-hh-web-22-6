/*'action" ist ein AddOn von Storybook, dass automatisch in unserem Projekt und muss nur importiert werden */
import { action } from '@storybook/addon-actions';
import Button from './index';

export default {
  // Titel der Story - Verzeichnis Component und darin Button
  titel: 'Component/Button',
  // Referenz zu unserer Component Button, die wir importieren
  component: Button,
};

// Arrow Function mit 'args' - im Grunde die Props der Button Component
const Template = (args) => <Button {...args} />;

export const Save = Template.bind({});
// Festlegen, mit welchen args/props die Button in der Story gerendert werden
Save.args = {
  children: 'Name of The Save Button',
  variant: 'save',
  onClick: action('I am the save Button'),
};

export const Cancel = Template.bind({});
Cancel.args = {
  children: 'Cancel Button',
  variant: 'cancel',
};

/* How to: GlobalStyle.js in unser Storybook einbinden? 
Siehe preview.js 
*/

/* How to: install storybook in your own project (e.g. Quiz App)
- npx storybook init
- npm7 (y/N) -> please choose N - means no :) 

Attentione! In this demo, storybook is already installed. 
 */
