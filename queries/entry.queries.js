db_queries_entries = {
    getAllEntries: `SELECT *
    FROM entries
    ORDER BY id_entry ASC`,
    getEntriesByEmail: `
    SELECT a.title,a.content,a.date,a.category,a.name,e.surname,e.image
    FROM entries AS a
    INNER JOIN authors AS e
    ON a.id_author=e.id_author
    WHERE e.email=$1
    ORDER BY e.title;`,
    updateEntry: `UPDATE entries
	SET title=$1, content=$2, date= NOW(), id_author=(SELECT id_author FROM authors WHERE email=$3), category=$4
	WHERE title = $5;`,
    createEntry: `INSERT INTO entries(title, content, date, id_author, category)
        VALUES ($1, $2, (NOW()), (SELECT authors.id_author FROM authors WHERE authors.email = $3), $4);`,
    deleteEntry: `DELETE FROM entries as e
    WHERE e.title = $1`
    
}

module.exports = db_queries_entries;