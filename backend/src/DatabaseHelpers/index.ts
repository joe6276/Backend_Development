
import { object } from 'joi';
import mssql from 'mssql'
import { sqlConfig } from '../Config'
export class DatabaseHelper {
private pool :Promise<mssql.ConnectionPool>
    constructor(){
    this.pool= mssql.connect(sqlConfig)
    }
            //let data= {name:'Jesse', age:10}
    createRequest (request:mssql.Request , data:{[x:string]:string}){
        const keys =Object.keys(data)//['name', 'age']
        keys.map(keyName=>{
            request.input(keyName, data[keyName]) // input(name, jesse) //input(age,10)
            // first iteration = request().input(name,'jesse')
            //second iteration request().input(name,'jesse').input(age,10)
        })

        return request
    }

   async  exec( storedProcedure:string , data:{[x:string]:string}={}){
        let emptyRequest = await (await this.pool).request()// empty request// await pool.request()
        let request =this.createRequest(emptyRequest,data) //request with inputs 
        //request().input(name,'jesse').input(age,10)
        let result = await request.execute(storedProcedure)
        return result
    }

    async query(queryString:string){
        return await (await this.pool).request().query(queryString)
    }


}