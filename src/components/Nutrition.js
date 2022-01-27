import React, { useRef,useState } from 'react'
import Navbaar from './Navbaar'
import { Form, Container, Button, FormControl,Card } from 'react-bootstrap'
import axios from 'axios'

export default function Nutrition() {
    const Searchref = useRef('')
    const [nutrition, setNutrition] = useState('')
    let dish='';
    const searchNutrition = () => {
         dish = Searchref.current.value;
        axios.get(`https://api.edamam.com/api/nutrition-data?app_id=634bad26&app_key=%20ce0d1f827824ae08263d2c6ea32920fd%09&nutrition-type=logging&ingr=${dish}`)
            .then(res => setNutrition(res.data));
    }
    return (
        <>
            <Navbaar />
            <Container>
                <div><Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        ref={Searchref}
                    />
                    <Button variant="outline-success" onClick={() => searchNutrition()}>Search </Button>
                </Form></div>
                {nutrition &&
                    <Card className="text-center">
                        <Card.Header>{Searchref.current.value}</Card.Header>
                        <Card.Body>
                            
                            <Card.Text>
                               Total Weight:{nutrition.totalWeight}
                               <br/>
                               Calories:{nutrition.calories}
                               <br/>
                               {nutrition.totalDaily.FAT.label}:{nutrition.totalDaily.FAT.quantity+nutrition.totalDaily.FAT.unit}<br/>
                               <br/>
                               {nutrition.totalNutrients.SUGAR.label}:{nutrition.totalNutrients.SUGAR.quantity+nutrition.totalNutrients.SUGAR.unit}<br/>
                               <br/>

                               {nutrition.totalNutrients.NA.label}:{nutrition.totalNutrients.NA.quantity+nutrition.totalNutrients.NA.unit}<br/>
                               <br/>

                               {nutrition.totalNutrients.VITB6A.label}:{nutrition.totalNutrients.VITB6A.quantity+nutrition.totalNutrients.VITB6A.unit}<br/>
                               <br/>
                              


                            </Card.Text>
                            
                        </Card.Body>
                      
                    </Card>}
            </Container>
        </>
    )
}
