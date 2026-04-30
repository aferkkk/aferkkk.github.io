#!/bin/bash

fecha=$(date +%d/%m/%Y)

while true; do
    read -p "Desea jugar a la PRIMITIVA o a la BONOLOTO (q|Q para salir)? " opcion
    
    case "$opcion" in
        BONOLOTO|PRIMITIVA)
            vector=()
            
            while [ ${#vector[@]} -lt 6 ]; do
                num=$(( RANDOM % 49 + 1 ))
                
                repetido=0
                for v in "${vector[@]}"; do
                    if [ "$v" -eq "$num" ]; then
                        repetido=1
                        break
                    fi
                done
                
                if [ "$repetido" -eq 0 ]; then
                    vector+=("$num")
                fi
            done
            
            vector_ordenado=($(printf "%s\n" "${vector[@]}" | sort -n))
            
            echo "Su $opcion para el $fecha es: ${vector_ordenado[@]}"
            
            exit 0
            ;;
            
        q|Q)
            exit 0
            ;;
            
        *)
            echo "ERROR no ha escogido o PRIMITIVA o BONOLOTO..."
            ;;
    esac
done