import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("travel_resource")
@Index("fk_travel_resource_travel_resource_type1_idx",["travelResourceTypeId",])
@Index("fk_travel_resource_travel_idx",["travelId",])
export class travel_resource {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:300,
        name:"value"
        })
    value:string;
        

    @Column("int",{ 
        nullable:false,
        name:"travelId"
        })
    travelId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:3000,
        name:"extendedValue"
        })
    extendedValue:string;
        

    @Column("int",{ 
        nullable:false,
        name:"travelResourceTypeId"
        })
    travelResourceTypeId:number;
        
}
