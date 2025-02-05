"use client";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
    // return <div>Error: {error.message}</div>;
    return (
        <html>
            <body>
                <h2>Global Error</h2>
            </body>
        </html>
    );
}
