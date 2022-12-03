import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (<div>
        <Link to={`todo/1`}>Todo 1</Link>
        <a href="/todo/2">Todo 2</a>
    </div>)
}

// Link - без перезагрузки страницы
// a - обычная ссылка с перезагрузкой страницы