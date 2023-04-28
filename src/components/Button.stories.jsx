import { Button } from "./Button";

export default {
    title: 'UI/MyButton',
    component: Button,
    argTypes: {
        variant: {
            type: "string",
            description: 'Variant of appereance',
            defaultValue: 'primary'
        }
    }
}

const Template = (arg) => <Button {...arg}/>

// history export

export const Default = Template.bind({});
Default.args = {
    children: 'I am a button',
    variant: 'primary'
}


export const Large = Template.bind({});
Large.args = {
    children: 'Click me',
    size: 'large'
}