sequenceDiagram
    participant browser
    participant server

    browser->>server: Post https://studies.cs.helsinki.fi/exampleapp/create_notes
    activate server
    server-->>browser: HTML document
    deactivate server
