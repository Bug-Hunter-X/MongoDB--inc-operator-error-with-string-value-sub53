```javascript
// Correct usage of $inc operator in MongoDB update
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { counter: 1 } });
```