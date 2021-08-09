const GoalSeek= (fn,Prams,Goal,IndependentVariable,Tol)=>
{
    let Res=0;
    let Leading=0,Lag=0;
    let Relation;
    let MaxIrritations=5000;
    let Count=0;
    Res=fn.apply(null,Prams);
    Prams[IndependentVariable]+=1;
    let TestResult=fn.apply(null,Prams);
    Relation=(Goal-Res)>(Goal-TestResult);
    Prams[IndependentVariable]-=1;
    while(!(((Goal/Res)*100>=100-(Tol/2)) && (Goal/Res)*100<=100+(Tol/2))) 
    {
        Leading=Prams[IndependentVariable];
        if ((Res>Goal)!==Relation)
        {
            Lag=Prams[IndependentVariable];
            Leading=Prams[IndependentVariable]*=2;
            
        }
        else
        {
            Prams[IndependentVariable]=(Leading+Lag)/2;
            if ((Res<Goal)!==Relation)
            {
                Leading=Prams[IndependentVariable];
            }
            else
            {
                Lag=Prams[IndependentVariable];
            }
        }
        Res=fn.apply(null,Prams);
        Count++;
        if (Count>=MaxIrritations)
        {
            break;
        }
    }

    if (Count>=MaxIrritations)
    {
        throw new Error("Failed to converge");
    }
    else
    {
        return Prams[IndependentVariable];
    }
    
}
export default GoalSeek;