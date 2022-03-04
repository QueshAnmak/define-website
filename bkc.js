function sum1 ()
{
    let nums = Array.from( arguments ).toString().split( ',' ).map( ( e ) => { return Number.parseFloat( e ); } );
    console.log( nums );
    let ans = 0;

    for ( let ele of nums )
    {
        if ( typeof ( ele ) != 'number' ) continue;

        ans += ele;
    }
    return an;
}

console.log( sum1( 1, 2, 3, '4', [ '5', 6 ] ) );