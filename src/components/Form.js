import React from 'react'

const Form = (props) => (
    <form className="form" onSubmit={props.handleAdd}>
        <div className="form__inner">
            <label className="form__label">Your Todo</label>
            <div className="form__area">
                <input name="title" type="text" className="form__input" placeholder="梅雨ってジメジメして洗濯物が乾きにくいよね" />
                <input type="submit" value="Add Todo" className="form__btn" />
            </div>
        </div>
    </form>
);

export default Form;