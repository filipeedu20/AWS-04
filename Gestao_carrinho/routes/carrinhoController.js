module.exports = {

    
    //=========================================================================
    // Insere produtos no carrinho de compra 
    // =========================================================================
    get(_, res) {       
        let = produtos =[
           {'id': 1 ,'nome': 'Iphone','description': 'Iphone geração 10','quantidade':2},
           {'id': 2 ,'nome': 'Notebook','description': 'notebook core i7, 8 GB','quantidade':1},
           {'id': 3 ,'name': 'Samsung','description': 'Descrição do produto aqui','quantidade':1}
        ];        
        res.json(produtos);
    },
    //=========================================================================
    // Realiza alterações
    // =========================================================================
    put(req, res) {
        var  carrinho = {'id': 10 ,'name': 'Samsung','description': 'Descrição do produto aqui','quantidade':1};
        if (!req.params.id) {
            res.json(produtos);
        }
        res.json(carrinho);
    },
    //=========================================================================
    // Registra novo produto 
    // =========================================================================
    post(req, res) {        
        var ret;       
        if(!req.body){            
            var ret = {'msg':'Erro ao inserir os produtos!'}
        }else{
            
            var name        = req.body.description.name; 
            var description = req.body.description;
            var quantidade  = req.body.quantidade;

            if(descTamanho< 10){                
                var ret = {'msg':'O campo description não pode ter menos de 10 caracteres!'}    
            }
            else if(precoProduto <= 0){
                 ret = {'msg':'O preço do produto não pode ser igual o menor que R$ 0.00'}    
            }

            else{
                ret = {'msg':'Produto inserido com sucesso!'}    
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
