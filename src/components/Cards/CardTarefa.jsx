import React from 'react'
import {Card, CardHeader, CardFooter, Button} from 'reactstrap'

export default props => <Card className="mb-2">
<CardHeader className="text-dark">
    { props.tarefa}
</CardHeader>
<CardFooter>
    <Button onClick={props.click} className="text-white" color={props.btnColor} size="sm">
        {props.text}
    </Button>
</CardFooter>
</Card>