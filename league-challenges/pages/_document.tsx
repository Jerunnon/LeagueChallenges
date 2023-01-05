import React from 'react';
import Document, { Html, Head, Main, NextScript} from 'next/document';

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className='bg-light text-gray-500 dark:bg-space dark:text-white'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};

export default CustomDocument;