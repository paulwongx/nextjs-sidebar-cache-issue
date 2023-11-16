# Issue with Next Cache

## Getting Started
Run the development server:
```bash
yarn install && yarn dev
```

## The Issue
1. Go to `http://localhost:3000/chat`
2. Type in `Message #4`
   1. After clicking submit, the page will redirect to the specific message url (ie., `http://localhost:3000/chat/eR4pMgx1iPVuXsKDoYju`)
3. Observe that the main area changes but the sidebar doesn't update
   1. However, it will update when you manually refresh the page on the browser (shortkey: `Ctrl+R`)
   2. Also notice that the sidebar data actually reloads with the latest message (as per server console.log `Sidebar.chats.latest ...`), but the UI just doesn't update
4. Repeat by inputting `Message #5`
   1. Main area updates, but the sidebar does not
5. How to fix???
