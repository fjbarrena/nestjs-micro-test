import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("business_requests")
export class business_requests {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:150,
        name:"nombre"
        })
    nombre:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"email"
        })
    email:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:2000,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creationDate"
        })
    creationDate:Date;
        
}
