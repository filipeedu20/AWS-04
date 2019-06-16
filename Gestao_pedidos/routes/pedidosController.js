module.exports = {

    
    //=========================================================================
    // Retorna pedidos 
    // =========================================================================
    get(_, res) {       
        let = pedidos =[
           {'idPedido': 1 ,'dataPedido': '10/01/2019','valorTotal': 7000.00,'estadoPedido':'Ativo'},
           {'idPedido': 2 ,'dataPedido': '03/06/2019','valorTotal': 2500.00,'estadoPedido':'Cancelado'},
           {'idPedido': 3 ,'dataPedido': '10/05/2019','valorTotal': 3200.00, 'estadoPedido':'Ativo'}
        ];        
        res.json(pedidos);
    },
    //=========================================================================
    // Altera estado do pedido 
    // =========================================================================
    put(req, res) {
        
        var  pedido = {'idPedido': 2 ,'dataPedido': '03/06/2019','valorTotal': 2500.00,'estadoPedido':'Cancelado'},

        if (!req.body.id) {
            res.json(pedido);
        }
        res.json(pedido);
    },
    //=========================================================================
    // Registra novo produto 
    // =========================================================================
    post(req, res) {        
        var ret;       
        if(!req.body){            
            var ret = {'msg':'Erro ao registrar pedido!'}
        }else{
            var idPedido        = req.body.description.idPedido; 
            var dataPedido      = req.body.description.dataPedido; 
            var valorTotal      = req.body.valorTotal;
            var estadoPedido    = req.body.estadoPedido;

            if(descTamanho< 10){                
                var ret = {'msg':'O campo data do pedido deve ser preenchido!'}    
            }
            else if(valorTotal <= 0){
                ret = {'msg':'O valor total do pedido não deve ser igual ou menor que R$ 0.00'}    
            }
            else{
                ret = {'msg':'Pedido registrado com sucesso!'}    
            }
        }
        // retorna resultado 
        res.json(ret);
    },
    //=========================================================================
    // Remove produto  
    // =========================================================================
    deleteID(req,res){    
    var  produtos = [
        {'id': 1 ,'nome': 'Iphone','description': 'Iphone geração 10','quantidade':2},
        {'id': 2 ,'nome': 'Notebook','description': 'notebook core i7, 8 GB','quantidade':1},
        {'id': 3 ,'name': 'Samsung','description': 'Descrição do produto aqui','quantidade':1}
    ];
    var id = req.params.id;
     var ret = ""  ;
     var removido = false;
    if(!req.params.id){
        ret = 'Produto inválido!';
    }else{
        for(var i =0 ; i < produtos.length; i++){           
            if(id==produtos[i].id){
                produtos.splice(i,1);
                i--                            
                removido  =true; // indica que o produto foi removido 
                ret ='Produto removido do carr com sucesso!';
            }
        }

        if(removido==true){
            ret ='Produto removido com sucesso!';           
        }else{
            ret ='Nenhum produto encontrado!';            
        }
    }          
    res.json({ret:ret});
}
};
