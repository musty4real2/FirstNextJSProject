"use client";

import React from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
    return (
        <html lang="en">
        <head>
            <title>Global Error</title>
        </head>
        <body>
        <h2>Global Error</h2>
        <p>{error.message}</p>
        </body>
        </html>
    );
}

