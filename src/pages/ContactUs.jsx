// components 
import MiscContactInfo from '../components/contact/MiscContactInfo.jsx';
import Form from '../components/contact/Form.jsx';
// styles
import '../styles/components/_contact-form.scss';

export default function ContactUs() {
    return (
        <div id='contact-form'>
            <h1 className='huge'>Contact us</h1>
            <p className='small'>
                Have a question about a product, feedback, or business inquiry for Titan Fitness?
            </p>
            <Form/>
            <MiscContactInfo/>
        </div>
    );
}