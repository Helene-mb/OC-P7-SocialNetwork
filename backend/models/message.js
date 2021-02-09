// Création des modèles Message
const db = require('./db');

const Message = function(message) {
    this.user_id=message.user_id,
    this.content=message.content,
    this.image=message.image,
    this.createdAt=message.createdAt,
    this.updatedAt=message.updatedAt
}

// Créer un message
Message.create = (newMessage, result) => {
    let statment = `INSERT INTO messages SET ?`;
    db.query(statment, newMessage, (err, res) => {
        console.log(res);
            if(err) {
            result(err, null);
            return;
        } else {
            result(null, {
                id:res.id,
                ...newMessage
            })
        }
    })
};

// Trouver un message
Message.findOne = (id, result) => {
    db.query("SELECT * FROM messages WHERE id=?", id, (err, res) => {
        if(err) {
            result(err, null);
            return;
        } else {
            result(null, res[0])
        }
    })
};

// Trouver tous les message
Message.findAll = (result) => {
    db.query("SELECT * FROM messages", (err, res) => {
        if(err) {
            result(err, null);
            return;
        } else {
            result(null, res)
        }
    })
};

// Modifier un message
Message.modify = (newMessage, result) => {
    db.query("UPDATE messages SET content=?, image=? WHERE id=",
    [newMessage.content, newMessage.image], id, (err, res) => {
        if(err) {
            result(err, null);
            return;
        } else {
            result(null, {
                id:res.id,
                ...newMessage
            })
        }
    })
};

// Supprimer un message
Message.delete = (id, result) => {
    db.query("DELETE messages WHERE id=?", id, (err, res) => {
        if(err) {
            result(err, null);
            return;
        } else {
            result(null, res)
        }
    })
};

module.exports = Message;