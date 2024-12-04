import { FC } from 'react';
import { Form, Button } from 'react-bootstrap';

interface Props {
    value: string;
    setValue: (value: string) => void;
    onSubmit: () => void;
    loading?: boolean;
    placeholder?: string;
    buttonTitle?: string;
}

const SliderField: FC<Props> = ({ value, setValue, onSubmit, loading, placeholder, buttonTitle = 'Отправить' }) => (
    <div className="mb-3 d-flex align-items-center">
        <span className="mr-3">{value}</span>
        <Form.Control
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            aria-label={placeholder}
            aria-describedby="slider"
            className="mr-3"
            style={{ width: '200px' }}
        />
        <Button disabled={loading} onClick={onSubmit} className="mybutton ml-3">
            {buttonTitle}
        </Button>
    </div>
);

export default SliderField;