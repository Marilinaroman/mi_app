import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('data.db')

export const init = () =>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, address TEXT NOT NULL, image TEXT NOT NULL)",
                [],
                ()=>{
                    resolve()
                },
                (_,err)=>{
                    reject(err)
                }
            )
        })

    })
    return promise
}

export const insertData = (address, image)=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "INSERT INTO data (email, address, image) VALUES (?,?,?)",
                [email, address, image],
                (_,result)=>{
                    resolve(result)
                },
                (_,err)=>{
                    reject(err)
                }
            )
        })
    })
    return promise
}

export const selectData = ()=>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "SELECT * FROM data",
                [],
                (_,result)=>{
                    resolve(result)
                },
                (_,err)=>{
                    reject(err)
                }
            )
        })
    })
    return promise
}